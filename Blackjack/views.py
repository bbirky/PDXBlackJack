from django.shortcuts import render

def myhome(request):
    return render(request, 'Blackjack/home.html')
