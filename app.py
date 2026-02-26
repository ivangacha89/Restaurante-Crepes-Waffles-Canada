from flask import Flask, render_template

# ----- Application creation -----  
app = Flask(__name__)

# Enable debug mode for development; shows errors and auto-reloads
app.config['DEBUG'] = True

# ----- Application routes -----

@app.route('/')
def index():
    """Home page.
    Renders the `index.html` template without additional data.
    """
    return render_template('index.html')


@app.route('/menu')
def menu():
    """Menu page.
    Displays the menu with static content and images.
    """
    return render_template('menu.html')


@app.route('/contacto')
def contacto():
    """Contact page.
    Simply displays the contact information.
    """
    return render_template('contacto.html')


# ----- Starting the application -----
if __name__ == '__main__':
    # Run the development server on all IPs (0.0.0.0) on port 5000
    app.run(debug=True, host='0.0.0.0', port=5000)
