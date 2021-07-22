from rest_framework import viewsets, response, status

from .OtherViews import CatalogPagination
from .serializers.Analyzes import AnalyzeSerializer, AnalyzeListSerializer, AnalyzeRetrieveSerializer, \
    AnalyseContentCategorySerializer, AnalyzeContentBlockSerializer
from ..models import (
    Analyze,
    AnalyseContentCategory,
    AnalyzeContentBlock
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