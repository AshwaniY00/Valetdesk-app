from flask import Flask, jsonify, request

app = Flask(__name__)

items = [
    {"id": 1, "title": "Task 1", "description": "Short desc", "details": "Full details of Task 1"},
    {"id": 2, "title": "Task 2", "description": "Short desc", "details": "Full details of Task 2"}
]

@app.route('/items', methods=['GET'])
def get_items():
    return jsonify(items)

@app.route('/items/<int:item_id>', methods=['GET'])
def get_item(item_id):
    item = next((i for i in items if i["id"] == item_id), None)
    return jsonify(item) if item else ("Not Found", 404)

@app.route('/items', methods=['POST'])
def create_item():
    data = request.json
    new_item = {
        "id": len(items) + 1,
        "title": data["title"],
        "description": data["description"],
        "details": "Details TBD"
    }
    items.append(new_item)
    return jsonify(new_item), 201

if __name__ == '__main__':
    app.run(debug=True)
