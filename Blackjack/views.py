from django.shortcuts import render, reverse
from django.http import HttpResponseRedirect
from .models import StatModel

def myview(request):
    myinstances = StatModel.objects.all()
    context = {
        'myinstances': myinstances
    }
    return render(request, 'Blackjack/index.html', context)

def mycreate(request):
    myfield = request.POST['myfield']
    mymodel = StatModel(myfield=myfield)
    mymodel.save()
    return HttpResponseRedirect(reverse('Blackjack:myview'))