from django.urls import path
from . import views

app_name = 'Blackjack'
urlpatterns = [
    path('', views.myview, name='myview'),
    path('mycreate/', views.mycreate, name='mycreate')
]