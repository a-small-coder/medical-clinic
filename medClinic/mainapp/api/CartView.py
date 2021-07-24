from django.shortcuts import get_object_or_404
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
        return Cart.objects.filter(for_anonymous_user=True).first()

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

    @action(methods=['put'], detail=False, url_path='current_customer_cart/add_to_cart/(?P<product_id>\d+)')
    def product_add_to_cart(self, *args, **kwargs):
        cart = self.get_cart(self.request.user)
        print(kwargs['product_id'])
        analyze = get_object_or_404(Analyze, id=kwargs['product_id'])
        print(analyze)
        cart_product, created = self._get_or_create_cart_product(self.request.user.customer, cart, analyze)
        if created:
            cart.products.add(cart_product)
            cart.save()
            return response.Response({'detail': "Product successfully added to cart"})
        return response.Response({'detail': "Product has already in cart"}, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['patch'], detail=False,
            url_path='current_customer_cart/change_product_qty/(?P<qty>\d+)/(?P<cart_product_id>\d+)')
    def change_product_qty(self, *args, **kwargs):
        cart_product = get_object_or_404(CartAnalyze, id=kwargs['cart_product_id'])
        cart_product.qty = int(kwargs['qty'])
        cart_product.save()
        cart_product.cart.save()
        return response.Response(status=status.HTTP_200_OK)

    @action(methods=['delete'], detail=False,
            url_path='current_customer_cart/product_remove_from_cart/(?P<cart_product_id>\d+)')
    def product_remove_from_cart(self, *args, **kwargs):
        cart = self.get_cart(self.request.user)
        cart_product = get_object_or_404(CartAnalyze, id=kwargs['cart_product_id'])
        cart.products.remove(cart_product)
        cart_product.delete()
        cart.save()
        return response.Response(status=status.HTTP_204_NO_CONTENT)

