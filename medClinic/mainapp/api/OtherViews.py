from rest_framework import viewsets, response, status, permissions
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from collections import OrderedDict
from django.contrib.auth.models import User
from rest_framework.decorators import action
from django.contrib.auth import authenticate, login, logout
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from django.shortcuts import get_object_or_404
from rest_framework.authtoken.models import Token

from .utils import create_new_anon
from ..models import *

from .serializers.Navigation import *
from .serializers.Other import *
from ..models import *


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


class UserView(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(methods=['get'], detail=False, url_path='user-data')
    def get_user_data(self, *args, **kwargs):
        user = self.request.user
        if user.is_authenticated:
            return response.Response(UserSerializer(user).data)
        return response.Response({'message': 'unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)

    @action(methods=['get'], detail=False, url_path='check-for-anon')
    def get_user_data(self, *args, **kwargs):
        user = self.request.user
        if user.is_authenticated:
            return response.Response({'user_id': user.id, 'is_anon': False, 'token': None})
        else:
            cookie_user_id = json.loads(self.request.COOKIES['user'])['USER_ID']
            if cookie_user_id and cookie_user_id > 0:  # cookie has USER_ID
                try:
                    cookie_user = User.objects.get(id=cookie_user_id)
                    token = None
                except:
                    cookie_user, token = create_new_anon()
                is_anon = cookie_user.username == f'unknown{cookie_user.id}'
                return response.Response({'user_id': cookie_user.id, 'is_anon': is_anon, 'token': token})
            # cookie has not USER_ID
            else:
                new_anonymous, token = create_new_anon()
                return response.Response({'user_id': new_anonymous.id, 'is_anon': True, 'token': token})


class RegisterView(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication, SessionAuthentication, BasicAuthentication]

    @action(methods=['post'], detail=False)
    def register_user(self, *args, **kwargs):

        userEmail = self.request.data['email']

        user = User.objects.filter(email=userEmail)
        print(user)
        if not user:
            print(self.request.data)
            userfirstname = self.request.data['firstName']
            userlastname = self.request.data['secondName']
            fatherName = self.request.data['fatherName']
            username = f'{userfirstname} {userlastname}'
            new_user = User.objects.create(
                first_name=userfirstname,
                last_name=fatherName,
                username=username,
                email=userEmail
            )
            new_user.save()
            new_user.set_password(self.request.data['password'])
            new_user.save()
            customer = Customer.objects.create(user=new_user)
            Cart.objects.create(owner=customer)
            Token.objects.get_or_create(user=new_user)
            return response.Response({'detail': 'User successfully register', 'username': username}, status=status.HTTP_200_OK)
        return response.Response({'detail': 'Email уже привязан к другому аккаунту'}, status=status.HTTP_400_BAD_REQUEST)

