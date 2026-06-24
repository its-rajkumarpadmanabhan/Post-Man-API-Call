from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

# This list will store our history of API calls
api_history = []

@app.route('/api/log', methods=['GET', 'POST', 'PUT', 'DELETE'])
def handle_api_log():
    # If it's a GET request from React just to FETCH the table data
    # We use a query parameter '?source=react' to distinguish it from a Postman GET
    if request.method == 'GET' and request.args.get('source') == 'react':
        return jsonify(api_history)

    # 1. Capture the HTTP Method (GET, POST, PUT, DELETE)
    method = request.method
    
    # 2. Extract the name or payload details safely
    data = request.get_json(silent=True) or {}
    name_value = data.get('name', 'N/A')
    
    # If it's a Postman GET/DELETE, it won't have a body, so check query params too
    if name_value == 'N/A' and request.args.get('name'):
        name_value = request.args.get('name')

    # 3. Create a log entry
    log_entry = {
        "id": len(api_history) + 1,
        "timestamp": datetime.now().strftime("%H:%M:%S"),
        "method": method,
        "payload": name_value,
        "status": "200 OK" if method != 'POST' else "201 Created"
    }
    
    # Append to our in-memory list (newest items first)
    api_history.insert(0, log_entry)
    
    return jsonify({"message": f"{method} request logged successfully", "entry": log_entry}), 200

if __name__ == '__main__':
    @app.route('/api/clear', methods=['POST'])
    def clear_history():
        """Empties the API history log."""
        global api_history
        api_history = [] # Reset the list to empty
        return jsonify({"message": "History cleared successfully"}), 200
    app.run(debug=True, port=5000)