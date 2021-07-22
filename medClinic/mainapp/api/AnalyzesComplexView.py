from rest_framework import viewsets, response, status

from .OtherViews import CatalogPagination
from .serializers.Analyzes import AnalyzeComplexSerializer
from ..models import (
    AnalyzeComplex,
)


class ComplexAnalyzesViewSet(viewsets.ModelViewSet):
    queryset = AnalyzeComplex.objects.all()
    serializer_class = AnalyzeComplexSerializer
    pagination_class = CatalogPagination