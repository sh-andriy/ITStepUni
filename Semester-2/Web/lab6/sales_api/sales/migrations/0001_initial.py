# Generated by Django 4.2.1 on 2023-05-16 06:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sale',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('store_location', models.CharField(max_length=100)),
                ('customer_age', models.IntegerField()),
                ('customer_email', models.EmailField(max_length=254)),
                ('items_tags', models.CharField(max_length=100)),
                ('coupon_used', models.BooleanField()),
            ],
        ),
    ]
