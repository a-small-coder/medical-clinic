from rest_framework import viewsets, response, status
from rest_framework.decorators import action
from .serializers.Cart import CartSerializer
from ..models import (
    Analyze,
    Cart, CartAnalyze,
    Customer
)


class CartViewSet(viewsets.ModelViewSet):

    serializer_class = CartSerializer
    queryset = Cart.objects.all()

    @staticmethod
    def get_cart(user):
        if user.is_authenticated:
            return Cart.objects.filter(owner=user.customer, for_anonymous_user=False).first()
        return  Cart.objects.filter(for_anonymous_user=True).first()

    @staticmethod
    def _get_or_create_cart_product(customer: Customer, cart: Cart, analyze: Analyze):
        cart_product, created = CartAnalyze.objects.get_or_create(
            user=customer,
            analyze=analyze,
            cart=cart
        )
        return cart_product, created

    @action(methods=['get'], detail=False)
    def current_customer_cart(self, *args, **kwargs):
        cart = self.get_cart(self.request.user)
        cart_serializer = CartSerializer(cart)
        return response.Response(cart_serializer.data)
