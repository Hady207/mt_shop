from rest_framework import serializers
from .models import Item, Customer, Message
from django.contrib.auth.models import User


class ItemSerializer(serializers.ModelSerializer):
    enquiries = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Customer.objects.all())

    class Meta:
        model = Item
        fields = ('id', 'productName', 'description', 'image',
                  'price', 'enquiries', 'owner')


class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = ('user', 'image',)


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('message', 'author', 'createdAt')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'is_staff')
