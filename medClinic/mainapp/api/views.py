from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from collections import OrderedDict
from .serializers import (
    NavigationCategorySerializer,
    SubNavigationCategorySerializer,
    SubNavigationCategoryRetrieveSerializer,
    NavigationCategoryDetailSerializer,
    AnalyzeRetrieveSerializer, AnalyzeSerializer,
    AnalyseContentCategorySerializer, AnalyzeContentBlockSerializer,
    AnalyzeListSerializer, AnalyzeComplexSerializer, AnalyzeComplex
    )
from ..models import NavigationCategory, SubNavigationCategory, Analyze, AnalyseContentCategory, AnalyzeContentBlock


class CatalogPagination(PageNumberPagination):

    page_size = 1
    page_size_param = 'page_size'
    max_page_size = 10

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
