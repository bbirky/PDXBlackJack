from django.urls import path
from . import views

app_name = 'Blackjack'
urlpatterns = [
    path('', views.myhome, name='myhome'),
]