from rest_framework import serializers

from .Other import GenderTypeSerializer, SearchGroupSerializer, ComplexTypeSerializer
from ...models import (
    Analyze, AnalyzeContentBlock, AnalyseContentCategory, AnalyzeComplex
)


# complex all fields with data about analyzes, gender, and complex
class AnalyzeComplexSerializer(serializers.ModelSerializer):
    included_analyzes = serializers.SerializerMethodField()
    gender = GenderTypeSerializer()
    complex_type = ComplexTypeSerializer()

    class Meta:
        model = AnalyzeComplex
        fields = '__all__'

    @staticmethod
    def get_included_analyzes(obj):
        return AnalyzeListSerializer(Analyze.objects.filter(complex=obj), many=True).data


# complex all fields
class AnalyzeComplexForeignSerializer(serializers.ModelSerializer):

    class Meta:
        model = AnalyzeComplex
        fields = '__all__'


class AnalyzeComplexTopServicesSerializer(serializers.ModelSerializer):

    class Meta:
        model = AnalyzeComplex
        fields = ['id', 'title_min', 'description', 'price', 'big_image', 'slug', 'small_image']


# ================================================================================
# ===============================Analyzes=========================================
# ================================================================================

# analyze all fields with data about complex, gender, search_group
class AnalyzeListSerializer(serializers.ModelSerializer):

    complex = AnalyzeComplexForeignSerializer()
    # print(AnalyzeComplex.objects.filter(id=1))
    gender = GenderTypeSerializer()
    search_group = SearchGroupSerializer()

    class Meta:
        model = Analyze
        fields = '__all__'

    # @staticmethod
    # def get_complex(obj):
    #     return AnalyzeComplexSerializer(AnalyzeComplex.objects.filter(id=obj.id)).data
    #
    # @staticmethod
    # def get_gender(obj):
    #     return GenderTypeSerializer(GenderType.objects.filter(id=obj.id)).data
    #
    # @staticmethod
    # def get_search_group(obj):
    #     return SearchGroupSerializer(SearchGroup.objects.filter(id=obj.id)).data


# analyze for analyze page with content data
class AnalyzeRetrieveSerializer(serializers.ModelSerializer):

    content = serializers.SerializerMethodField()

    class Meta:
        model = Analyze
        fields = ['id', 'title', 'title_min', 'price', 'time', 'is_popular', 'vendor_code', 'is_unic', 'content', 'complex']

    @staticmethod
    def get_content(obj):
        return AnalyseContentCategorySerializer(AnalyseContentCategory.objects.filter(analyze=obj), many=True).data


# analyze all fields for complex data (catalog page)
class AnalyzeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Analyze
        fields = '__all__'


# analyze category for analyze content (analyze page)
class AnalyseContentCategorySerializer(serializers.ModelSerializer):

    items = serializers.SerializerMethodField()

    class Meta:
        model = AnalyseContentCategory
        fields = ['title', 'items', 'id']

    @staticmethod
    def get_items(obj):
        return AnalyzeContentBlockSerializer(AnalyzeContentBlock.objects.filter(analyze_content_category=obj), many=True).data


# content for analyze (analyze page)
class AnalyzeContentBlockSerializer(serializers.ModelSerializer):

    class Meta:
        model = AnalyzeContentBlock
        fields = ['title', 'text', 'pos', 'id']



