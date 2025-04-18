from django.shortcuts import render, redirect
import sendgrid
from sendgrid.helpers.mail import Mail, Email, To, Content
import os

def index(request):
    return render(request, 'index.html')


def send_mail(name, email, message):
    mi_email = "joaco.munoz04@gmail.com"
    sg = sendgrid.SendGridAPIClient(api_key=os.environ.get("SENDGRID_API_KEY"))  # Cambiá por tu key real y guardala de forma segura

    from_email = Email(mi_email)
    to_email = To(mi_email)

    html_content = f"""
    <h1>Recibiste un mensaje de tu sitio web</h1>
    <p><strong>Nombre:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Mensaje:</strong> {message}</p>
    """

    mail = Mail(from_email, to_email, "Recibiste un mensaje de tu sitio web", html_content)
    
    try:
        response = sg.send(mail)
        print(f"Status Code: {response.status_code}")
        print(f"Body: {response.body}")
        print(f"Headers: {response.headers}")
    except Exception as e:
        print(f"Ocurrió un error al enviar el correo: {e}")




def mail(request):
    name = request.POST['name']
    email = request.POST['email']
    message = request.POST['message']
    if request.method == 'POST':
        send_mail(name, email, message)
        return render(request, 'mail.html')
    return redirect('index')
