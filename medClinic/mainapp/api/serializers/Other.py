from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

from ...models import (
    SearchGroup,
    ComplexType,
    AboutUsCategory,
    AboutUsContentBlock,
    OurAchievements, Customer
)


class SearchGroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = SearchGroup
        fields = '__all__'


class ComplexTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ComplexType
        fields = '__all__'


class AboutUsCategorySerializer(serializers.ModelSerializer):

    content_items = serializers.SerializerMethodField()

    class Meta:
        model = AboutUsCategory
        fields = '__all__'

    @staticmethod
    def get_content_items(obj):
        return AboutUsContentBlockSerializer(AboutUsContentBlock.objects.filter(category=obj), many=True).data


class AboutUsContentBlockSerializer(serializers.ModelSerializer):

    class Meta:
        model = AboutUsContentBlock
        fields = ['id', 'title', 'text']


class OurAchievementsSerializer(serializers.ModelSerializer):

    class Meta:
        model = OurAchievements
        fields = ['id', 'title', 'text', 'icon']


class UserSerializer(serializers.ModelSerializer):
    customer = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'password', 'email', 'customer']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    @staticmethod
    def get_customer(obj):
        return CustomerSerializer(Customer.objects.filter(user=obj), many=False).data

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = ['phone', 'address']
