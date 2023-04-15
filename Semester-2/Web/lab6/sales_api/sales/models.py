from django.db import models


class Sale(models.Model):
    store_location = models.CharField(max_length=100)
    customer_age = models.IntegerField()
    customer_email = models.EmailField()
    items_tags = models.CharField(max_length=100)
    coupon_used = models.BooleanField()

    def serialize(self):
        return {
            'store_location': self.store_location,
            'customer_age': self.customer_age,
            'customer_email': self.customer_email,
            'items_tags': self.items_tags,
            'coupon_used': self.coupon_used,
        }
