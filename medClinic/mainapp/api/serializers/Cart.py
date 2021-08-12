from rest_framework import serializers

from .Analyzes import AnalyzeSerializer
from...models import (
    Cart, CartAnalyze, Customer
    )


class CartProductSerializer(serializers.ModelSerializer):

    analyze = AnalyzeSerializer()

    class Meta:
        model = CartAnalyze
        fields = ['id', 'analyze', 'qty', 'final_price']


class CustomerSerializer(serializers.ModelSerializer):

    user = serializers.SerializerMethodField()

    class Meta:
        model = Customer
        fields = '__all__'

    @staticmethod
    def get_user(obj):
        first_name, last_name = obj.user.first_name, obj.user.last_name
        if not (first_name and last_name):
            return obj.user.username
        return ' '.join([first_name, last_name])


class CartSerializer(serializers.ModelSerializer):

    products = CartProductSerializer(many=True)
    owner = CustomerSerializer()

    class Meta:
        model = Cart
        fields = '__all__'
