from rest_framework import viewsets, response, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from collections import OrderedDict

from .serializers.Navigation import NavigationCategorySerializer, NavigationCategoryDetailSerializer, \
    SubNavigationCategorySerializer, SubNavigationCategoryRetrieveSerializer
from .serializers.Other import AboutUsCategorySerializer, OurAchievementsSerializer
from ..models import (
    NavigationCategory,
    SubNavigationCategory,
    AboutUsCategory,
    OurAchievements
)


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


class AboutUsCategoryViewSet(viewsets.ModelViewSet):

    queryset = AboutUsCategory.objects.all()
    serializer_class = AboutUsCategorySerializer


class OurAchievementsViewSet(viewsets.ModelViewSet):

    queryset = OurAchievements.objects.filter(in_archive=False)
    serializer_class = OurAchievementsSerializer
