# from rest_framework import viewsets, response, status, filters
#
# from .OtherViews import CatalogPagination
# from .serializers.Analyzes import AnalyzeSerializer, AnalyzeListSerializer, AnalyzeRetrieveSerializer, \
#     AnalyzeContentBlockSerializer
# from ..models import (
#     Analyze,
#     AnalyzeContentBlock
# )
#
#
# class AnalyseViewSet(viewsets.ModelViewSet):
#
#     queryset = Analyze.objects.all().order_by('id')
#     serializer_class = AnalyzeSerializer
#     pagination_class = CatalogPagination
#
#     action_to_serializer = {
#         "list": AnalyzeListSerializer,
#         "retrieve": AnalyzeRetrieveSerializer
#     }
#
#     def get_serializer_class(self):
#         return self.action_to_serializer.get(
#             self.action,
#             self.serializer_class
#         )
#
#
# class UnicAnalyseViewSet(viewsets.ModelViewSet):
#
#     queryset = Analyze.objects.filter(is_unic=True)
#     serializer_class = AnalyzeSerializer
#     pagination_class = CatalogPagination
#
#     action_to_serializer = {
#         "list": AnalyzeSerializer,
#         "retrieve": AnalyzeRetrieveSerializer
#     }
#
#     def get_serializer_class(self):
#         return self.action_to_serializer.get(
#             self.action,
#             self.serializer_class
#         )
#
#
#
# class AnalyzeContentBlockViewSet(viewsets.ModelViewSet):
#
#     queryset = AnalyzeContentBlock.objects.all()
#     serializer_class = AnalyzeContentBlockSerializer