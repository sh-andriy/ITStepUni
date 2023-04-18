from django.test import TestCase, Client
from django.urls import reverse
from .models import Sale


class SalesAPITests(TestCase):
    def setUp(self):
        # Create sample data for testing
        Sale.objects.create(store_location="Store A", customer_age=25, customer_email="test1@example.com", items_tags="kids, travel", coupon_used=True)
        Sale.objects.create(store_location="Store B", customer_age=35, customer_email="test2@example.com", items_tags="home, electronics", coupon_used=False)
        Sale.objects.create(store_location="Store C", customer_age=30, customer_email="test3@example.com", items_tags="travel, clothing", coupon_used=True)

    def test_sales_list_with_filters(self):
        # Prepare test data and parameters
        client = Client()
        url = reverse('sales_list')

        # Perform a GET request with filters
        response = client.get(url, {'storeLocation': 'Store A', 'customer_age': '{"gt":20}', 'items_tags': 'kids'})

        # Assert response status code and data correctness
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 1)
        self.assertEqual(response.json()[0]['store_location'], "Store A")

    # Add more test methods to cover other scenarios and edge cases
