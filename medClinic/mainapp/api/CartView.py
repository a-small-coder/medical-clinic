from django.shortcuts import get_object_or_404
from rest_framework import viewsets, response, status
from rest_framework.decorators import action
from .serializers.Cart import CartSerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .utils import get_cookie_cart, get_cart_or_create_for_anon
from ..models import *


class CartViewSet(viewsets.ModelViewSet):

    serializer_class = CartSerializer
    queryset = Cart.objects.all()
    authentication_classes = [TokenAuthentication, SessionAuthentication, BasicAuthentication]
    # permission_classes = [IsAuthenticated]

    @staticmethod
    def get_cart(request):
        user = request.user
        if user.is_authenticated:
            customer = Customer.objects.filter(user=user)

            if not customer:
                customer = Customer.objects.create(user=user)
                customer.save()
                cart = Cart.objects.create(owner=customer)
                cart.save()
            else:
                print('\n\n', customer, ' hello \n\n')
                cart = Cart.objects.filter(owner=customer[0], for_anonymous_user=False).first()
                print('\n\n', cart, ' hello \n\n')
        else:
            cart = get_cart_or_create_for_anon(request)
        return cart

    @staticmethod
    def _get_or_create_cart_product(cart: Cart, product: Product):
        cart_product, created = CartItem.objects.get_or_create(
            product=product,
            cart=cart
        )
        print('\n\n', cart_product, ' hello \n\n')
        return cart_product, created

    @action(methods=['get'], detail=False)
    def current_customer_cart(self, *args, **kwargs):
        cart = self.get_cart(self.request)
        cart = CartSerializer(cart).data
        return response.Response(cart)

    @action(methods=['put'], detail=False, url_path='current_customer_cart/add_to_cart/(?P<product_id>\d+)')
    def product_add_to_cart(self, *args, **kwargs):
        cart = self.get_cart(self.request)
        product = get_object_or_404(Product, id=kwargs['product_id'])
        print('\n\n', product, ' hello \n\n')
        cart_product, created = self._get_or_create_cart_product(cart, product)

        if created:
            cart_product.qty = 1
            cart_product.save()
            cart.cart_items.add(cart_product)
            cart.save()
            return response.Response({'detail': "Product successfully added to cart"})
        return response.Response({'detail': "Product has already in cart"}, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['patch'], detail=False,
            url_path='current_customer_cart/change_product_qty/(?P<qty>\d+)/(?P<cart_product_id>\d+)')
    def change_product_qty(self, *args, **kwargs):
        cart_product = get_object_or_404(CartItem, id=kwargs['cart_product_id'])
        cart_product.qty = int(kwargs['qty'])
        cart_product.save()
        cart_product.cart.save()
        return response.Response(status=status.HTTP_200_OK)

    @action(methods=['delete'], detail=False,
            url_path='current_customer_cart/product_remove_from_cart/(?P<cart_product_id>\d+)')
    def product_remove_from_cart(self, *args, **kwargs):
        cart = self.get_cart(self.request)
        cart_product = get_object_or_404(CartItem, id=kwargs['cart_product_id'])
        cart.cart_items.filter(id=cart_product.id).delete()
        cart_product.delete()
        cart.save()
        return response.Response(status=status.HTTP_204_NO_CONTENT)



