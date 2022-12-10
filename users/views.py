from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User
from django.shortcuts import render, get_object_or_404
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from django.views.generic import DetailView


from Blackjack.models import Session

class SignUpView(CreateView):
    form_class = UserCreationForm
    template_name = 'Blackjack/signup.html'
    success_url = reverse_lazy('login')

def userProfile(request, username):
    totalWins = 0
    totalLosses = 0
    user = User.objects.get(username=username)
    sessions = Session.objects.filter(player=request.user)
    print("!!!!!!!!!!!", sessions[0].win)
    for item in sessions:
        totalWins += item.win
        totalLosses += item.losses
        print("@@@@@@", item.win, item.losses)
        print("@@@@@@", totalWins, totalLosses)

    context = {
        "user":user,
        "sessions":sessions,
        "totalWins": totalWins,
        "totalLosses": totalLosses,
    }
    

    return render(request, 'users/profile.html', context)

# class ProfileView(DetailView):
#     model = User
#     template_name = 'users/profile.html'
#     context_object_name = 'user_profile'
    
#     def get_object(self):
#         return get_object_or_404(User, username=self.kwargs['username'])