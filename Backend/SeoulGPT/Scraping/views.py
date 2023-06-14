from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, Http404

@login_required
def create(request):
    if not request.user.is_superuser:
        raise Http404("You are not authorized to view this page.")
    return HttpResponse("Hello World")
