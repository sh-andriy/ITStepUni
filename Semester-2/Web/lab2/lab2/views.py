from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User


def create_user(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        print(email)
        print(password)
        # Check if email and password are present
        if not email:
            return JsonResponse({'error': 'This field email is required'}, status=400)
        if not password:
            return JsonResponse({'error': 'This field password is required'}, status=400)

        # Check if user already exists
        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'This email is already in use'}, status=400)

        # Create user
        user = User.objects.create_user(email=email, password=password)

        # Return user object
        return JsonResponse({
            'email': user.email,
            'api_key': user.api_key,
        }, status=201)
    else:
        # Display empty form
        return render(request, 'create_user.html')


@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Check if email and password are present
        if not email:
            return JsonResponse({'error': 'This field email is required'}, status=400)
        if not password:
            return JsonResponse({'error': 'This field password is required'}, status=400)

        # Check if user exists and the password is correct
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User with such credentials was not found'}, status=400)
        if not user.check_password(password):
            return JsonResponse({'error': 'User with such credentials was not found'}, status=400)

        # Return user object
        return JsonResponse({
            'email': user.email,
            'api_key': user.api_key,
        }, status=200)
    elif request.method == 'GET':
        # Display empty form
        return render(request, 'login_user.html')
    else:
        # Display error message for non-allowed method
        return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def create_link(request):
    if request.method == 'POST':
        api_key = request.headers.get('authorization')
        if not api_key:
            return JsonResponse({'error': 'User is not authorized'}, status=401)

        user = User.objects.filter(api_key=api_key).first()
        if not user:
            return JsonResponse({'error': 'User is not authorized'}, status=401)

        original_link = request.POST.get('originalLink')
        if not original_link:
            return JsonResponse({'error': 'This field originalLink is required'}, status=400)

        # generate random short link with length of 15 characters
        short_link = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase + string.digits, k=15))

        # calculate expiration date (5 days from now)
        expired_at = datetime.now() + timedelta(days=5)

        # create Link object
        link = Link.objects.create(user=user, original_link=original_link, short_link=short_link, expired_at=expired_at)

        # Return link object
        return JsonResponse({
            'link': link.short_link,
            'expiredAt': link.expired_at.strftime('%Y-%m-%d %H:%M:%S'),
        }, status=201)
    else:
        # Display error message for non-allowed method
        return JsonResponse({'error': 'Method not allowed'}, status=405)
