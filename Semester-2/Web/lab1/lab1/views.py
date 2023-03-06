from django.http import JsonResponse
from .models import Session, Theater, User


def sessions(request):
    user_id = request.GET.get('userId')
    # filter sessions by user id
    sessions = Session.objects.filter(user_id=user_id)
    # serialize sessions and return as JSON response
    data = {'sessions': list(sessions.values())}
    return JsonResponse(data)


def theaters(request):
    city = request.GET.get('address_city')
    zipcode = request.GET.get('address_zipcode')
    latitude = request.GET.get('latitude')
    longitude = request.GET.get('longitude')
    # filter theaters by address and location
    theaters = Theater.objects.filter(address_city=city, address_zipcode=zipcode, latitude=latitude, longitude=longitude)
    # serialize theaters and return as JSON response
    data = {'theaters': list(theaters.values())}
    return JsonResponse(data)


def theater(request, theater_id):
    # retrieve theater by id
    theater = Theater.objects.get(id=theater_id)
    # serialize theater and return as JSON response
    data = {'theater': theater}
    return JsonResponse(data)


def users(request):
    name = request.GET.get('name')
    email = request.GET.get('email')
    # filter users by name and email
    users = User.objects.filter(name=name, email=email)
    # serialize users and return as JSON response
    data = {'users': list(users.values())}
    return JsonResponse(data)
