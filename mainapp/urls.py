from django.urls import path, include
from . import views

urlpatterns = [
    path('auth/', views.Pages.as_view(), name = "login"),
    path('dashboard/', views.Dash.as_view(), name = "dash"),
    path('dashboard/get-config', views.Configs.as_view())

    #path('accounts/', include('django.contrib.auth.urls')),
]
