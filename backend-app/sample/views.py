from django.http import JsonResponse
from django.views.generic import View

# Create your views here.


class SampleView(View):
    def get(self, request):
        return JsonResponse({"message": "Hello, World!"})
