from django.urls import path
from . import views

app_name = 'Blackjack'
urlpatterns = [
    path('<str:username>/', views.myhome, name='myhome'),
]