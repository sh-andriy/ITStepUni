from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User


def create_user(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

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
