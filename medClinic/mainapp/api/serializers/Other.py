from rest_framework import serializers

from ...models import (
    SearchGroup, GenderType, ComplexType
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
