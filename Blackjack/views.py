from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from .models import Session
 
def myhome(request):
    return render(request, 'Blackjack/home.html')

def postResults(request, id):
    print('!!!!!!!!!!!!', request.POST)
    print('!!!!!!!!!!!!', request.user)
    # try:
    #     obj = get_object_or_404(Session, id=id)
    # except:

    print('!!!!!!!!!!!!!!!!!!!!!!')
    win = request.POST['win']
    losses = request.POST['losses']
        
    

    session = Session(win=win, losses=losses, player=request.user)
    session.save()
 

    return render(request, 'Blackjack/home.html')
