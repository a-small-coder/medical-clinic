from rest_framework import viewsets, response, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.decorators import action
from collections import OrderedDict
from django.shortcuts import get_object_or_404
from .serializers import (
    NavigationCategorySerializer,
    SubNavigationCategorySerializer,
    SubNavigationCategoryRetrieveSerializer,
    NavigationCategoryDetailSerializer,
    AnalyzeRetrieveSerializer, AnalyzeSerializer,
    AnalyseContentCategorySerializer, AnalyzeContentBlockSerializer,
    AnalyzeListSerializer, AnalyzeComplexSerializer, AnalyzeComplex,
    CustomerSerializer, CartSerializer, CartProductSerializer
    )
from ..models import (
    NavigationCategory,
    SubNavigationCategory,
    Analyze,
    AnalyseContentCategory,
    AnalyzeContentBlock,
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


class CatalogPagination(PageNumberPagination):

    page_size = 4
    page_size_param = 'page_size'
    max_page_size = 50

    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('total_count', self.page.paginator.count),
            ('page_size', self.page_size),
            ('current_page', self.page.number),
            ('items', data)
        ]))


class NavigationCategoryViewSet(viewsets.ModelViewSet):

    queryset = NavigationCategory.objects.all()
    serializer_class = NavigationCategorySerializer

    action_to_serializer = {
        "list": NavigationCategoryDetailSerializer,
        "retrieve": NavigationCategoryDetailSerializer,
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class SubNavigationCategoryViewSet(viewsets.ModelViewSet):

    queryset = SubNavigationCategory.objects.all()
    serializer_class = SubNavigationCategorySerializer

    action_to_serializer = {
        "list": SubNavigationCategoryRetrieveSerializer,
        "retrieve": SubNavigationCategoryRetrieveSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class AnalyseViewSet(viewsets.ModelViewSet):

    queryset = Analyze.objects.all()
    serializer_class = AnalyzeSerializer
    pagination_class = CatalogPagination

    action_to_serializer = {
        "list": AnalyzeListSerializer,
        "retrieve": AnalyzeRetrieveSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class ComplexAnalyzesViewSet(viewsets.ModelViewSet):
    queryset = AnalyzeComplex.objects.all()
    serializer_class = AnalyzeComplexSerializer
    pagination_class = CatalogPagination


class UnicAnalyseViewSet(viewsets.ModelViewSet):

    queryset = Analyze.objects.filter(is_unic=True)
    serializer_class = AnalyzeSerializer
    pagination_class = CatalogPagination

    action_to_serializer = {
        "list": AnalyzeListSerializer,
        "retrieve": AnalyzeRetrieveSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class AnalyseContentCategoryViewSet(viewsets.ModelViewSet):

    queryset = AnalyseContentCategory.objects.all()
    serializer_class = AnalyseContentCategorySerializer


class AnalyzeContentBlockViewSet(viewsets.ModelViewSet):

    queryset = AnalyzeContentBlock.objects.all()
    serializer_class = AnalyzeContentBlockSerializer
