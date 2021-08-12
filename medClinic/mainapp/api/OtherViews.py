from rest_framework import viewsets, response, status, permissions
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from collections import OrderedDict
from django.contrib.auth.models import User
from rest_framework.decorators import action
from django.contrib.auth import authenticate, login, logout

from .serializers.Navigation import NavigationCategorySerializer, NavigationCategoryDetailSerializer, \
    SubNavigationCategorySerializer, SubNavigationCategoryRetrieveSerializer
from .serializers.Other import AboutUsCategorySerializer, OurAchievementsSerializer, UserSerializer
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


class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer


class AuthViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny,)

    @action(methods=['post'], detail=False, url_path='login')
    def login_user(self, *args, **kwargs):
        # print(self.request.data['username'])
        username = self.request.data['username']
        password = self.request.data['password']
        user = authenticate(self.request, username=username, password=password)
        if user is not None:
            login(self.request, user)
            return response.Response({'detail': "User successfully authorized"})
        user = User.objects.filter(username=username)
        if user is not None:
            return response.Response({'detail': "Wrong password"})
        return response.Response({'detail': 'Wrong username'})

    @action(methods=['get'], detail=False, url_path='logout')
    def logout_user(self, *args, **kwargs):
        logout(self.request)
        return response.Response({'detail': 'User successfully logout'})


