from rest_framework import viewsets, response, status, filters

from .OtherViews import CatalogPagination
from .serializers.Analyzes import *
from ..models import *


class ProductsView(viewsets.ModelViewSet):

    queryset = Product.objects.order_by('price')
    serializer_class = ProductSerializer
    pagination_class = CatalogPagination


class ComplexesView(viewsets.ModelViewSet):
    queryset = AnalyzeComplex.objects.order_by('price')
    serializer_class = AnalyzeComplexRetrieveSerializer
    pagination_class = CatalogPagination

    action_to_serializer = {
        "list": ProductSerializer,
        "retrieve": AnalyzeComplexRetrieveSerializer
    }

    def get_serializer_class(self):
        print(self.action)
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class ComplexAnalyzesTopServicesViewSet(viewsets.ModelViewSet):
    queryset = AnalyzeComplex.objects.filter(on_main_page=True)
    serializer_class = AnalyzeComplexTopServicesSerializer


class ComplexAnalyzesTopFiveViewSet(viewsets.ModelViewSet):
    queryset = AnalyzeComplex.objects.filter(in_top_five_list=True)
    serializer_class = AnalyzeComplexTopServicesSerializer


class AnalyzesView(viewsets.ModelViewSet):
    queryset = Analyze.objects.order_by('price')
    serializer_class = AnalyzeRetrieveSerializer
    pagination_class = CatalogPagination

    action_to_serializer = {
        "list": ProductSerializer,
        "retrieve": AnalyzeRetrieveSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class UnicAnalyseViewSet(viewsets.ModelViewSet):

    queryset = Analyze.objects.filter(is_unic=True)
    serializer_class = AnalyzeRetrieveSerializer
    pagination_class = CatalogPagination

    action_to_serializer = {
        "list": UnicAnalyzeListSerializer,
        "retrieve": AnalyzeRetrieveSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class AnalyzeContentBlockViewSet(viewsets.ModelViewSet):

    queryset = AnalyzeContentBlock.objects.all()
    serializer_class = AnalyzeContentBlockSerializer
