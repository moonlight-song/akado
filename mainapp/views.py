from django.http import HttpResponse
from django.shortcuts import render, redirect
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from os import path as OSpath
from subprocess import Popen, PIPE


class Configs (APIView) :

    def get (self, request, *args, **kwargs) :

        script = Popen("./check_vpn.sh", stdout=PIPE, shell=True)
        script.communicate()
        exit_status = script.wait()

        if exit_status == 0 :
            return HttpResponse ("Some shit occured on the VPN side")

        else :
            directory = OSpath.dirname(OSpath.abspath(__file__))
            filename = OSpath.join("configs", "config.jpg")

            file = open (OSpath.join (directory, filename), 'rb')
            response = HttpResponse(file, content_type = 'application/octet-stream')
            response['Content-Disposition'] = 'attachment; filename="file.jpg"'
            return response

class Pages (APIView) :

    def get (self, request, *args, **kwargs):
        return render(request, 'index.html', None)

    def post (self, request, *args, **kwargs):
        user = authenticate(username = request.POST['username'], password = request.POST['password'])
        if user is None:
            return HttpResponse ("Damn")
        else:
            #return render(request, 'index.html', None)
            return redirect ('dash')


class Dash (APIView) :

    def get (self, request, *args, **kwargs):
        return render(request, 'dashboard/index.html', None)
