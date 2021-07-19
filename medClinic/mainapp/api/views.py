from rest_framework import viewsets

from .serializers import (
    NavigationCategorySerializer,
    SubNavigationCategorySerializer,
    SubNavigationCategoryRetrieveSerializer,
    NavigationCategoryDetailSerializer,
    AnalyzeRetrieveSerializer, AnalyzeSerializer,
    AnalyseContentCategorySerializer, AnalyzeContentBlockSerializer
)
from ..models import NavigationCategory, SubNavigationCategory, Analyze, AnalyseContentCategory, AnalyzeContentBlock


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

    action_to_serializer = {
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
