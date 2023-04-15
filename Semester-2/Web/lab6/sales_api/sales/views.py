from django.http import JsonResponse
from django.db.models import Q
from .models import Sale

def sales_list(request):
    # Get request parameters
    store_location = request.GET.get('storeLocation')
    customer_age = request.GET.get('customer_age')
    customer_email_domain = request.GET.get('customer_emailDomain')
    items_tags = request.GET.get('items_tags')
    coupon_used = request.GET.get('couponUsed')

    # Create an empty query object to construct the filters
    query = Q()

    # Filter based on storeLocation parameter
    if store_location:
        if '*' in store_location:
            # Partial match
            store_location = store_location.replace('*', '')
            query &= Q(store_location__contains=store_location)
        elif '\\' in store_location:
            # Match starting and ending characters
            store_location = store_location.replace('\\*', '*')
            query &= Q(store_location__startswith=store_location[:-1], store_location__endswith=store_location[-1])
        else:
            # Exact match
            query &= Q(store_location=store_location)

    # Filter based on customer_age parameter
    if customer_age:
        age_filters = {}
        try:
            customer_age = eval(customer_age)  # Convert string to dictionary
            if 'gt' in customer_age:
                age_filters['age__gt'] = customer_age['gt']
            if 'lt' in customer_age:
                age_filters['age__lt'] = customer_age['lt']

            # Check and return an error if 'lt' is less than 'gt'
            if 'gt' in age_filters and 'lt' in age_filters and age_filters['lt'] < age_filters['gt']:
                return JsonResponse({'error': "Invalid age range. 'lt' should be greater than 'gt'."}, status=400)

            # Apply age filters
            query &= Q(**age_filters)
        except (SyntaxError, TypeError):
            return JsonResponse({'error': "Invalid customer_age format. It should be a dictionary."}, status=400)

    # Filter based on customer_emailDomain parameter
    if customer_email_domain:
        query &= Q(customer_email__endswith=customer_email_domain)

    # Filter based on items_tags parameter
    if items_tags:
        tags = items_tags.split(',')
        tag_filters = Q()
        for tag in tags:
            tag_filters |= Q(items_tags__contains=tag.strip())
        query &= tag_filters

    # Filter based on couponUsed parameter
    if coupon_used:
        if coupon_used.lower() == 'true':
            query &= Q(coupon_used=True)
        elif coupon_used.lower() == 'false':
            query &= Q(coupon_used=False)
        else:
            return JsonResponse({'error': "Invalid couponUsed value. It should be 'true' or 'false'."}, status=400)

    # Perform the filtering based on the constructed query
    sales_data = Sale.objects.filter(query)

    # Serialize the filtered data as per your requirement
    serialized_sales_data = [sale.serialize() for sale in sales_data]

    # Return the serialized data as a JSON response
    return JsonResponse(serialized_sales_data, safe=False)
