from rest_framework import serializers

from ...models import (
    SearchGroup, GenderType, ComplexType, AboutUsCategory, AboutUsContentBlock
    )


class SearchGroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = SearchGroup
        fields = '__all__'


class GenderTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = GenderType
        fields = ['id', 'slug']


class ComplexTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ComplexType
        fields = '__all__'


class AboutUsCategorySerializer(serializers.ModelSerializer):

    content_items = serializers.SerializerMethodField()

    class Meta:
        model = AboutUsCategory
        fields = '__all__'

    @staticmethod
    def get_content_items(obj):
        return AboutUsContentBlockSerializer(AboutUsContentBlock.objects.filter(category=obj), many=True).data


class AboutUsContentBlockSerializer(serializers.ModelSerializer):

    class Meta:
        model = AboutUsContentBlock
        fields = ['id', 'title', 'text']
