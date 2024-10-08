"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from api.models import db, Users


api = Blueprint('api', __name__)
CORS(api)  # Allow CORS requests to this API

@api.route('/people', methods=['GET'])
def get_all_people():
    people = people.query.all()
    response_body = [{'id': p.id, 'name': p.name, 'birth_year': p.birth_year, 'gender': p.gender} for p in people]
    return jsonify(response_body), 200

@api.route('/people/<int:people_id>', methods=['GET'])
def get_people_by_id(people_id):
    people = people.query.get_or_404(people_id)
    response_body = {'id': people.id, 'name': people.name, 'birth_year': people.birth_year, 'gender': people.gender}
    return jsonify(response_body), 200

@api.route('/planets', methods=['GET'])
def get_all_planets():
    planets = planets.query.all()
    response_body = [{'id': p.id, 'name': p.name, 'climate': p.climate, 'terrain': p.terrain} for p in planets]
    return jsonify(response_body), 200

@api.route('/planets/<int:planet_id>', methods=['GET'])
def get_planet_by_id(planet_id):
    planet = planet.query.get_or_404(planet_id)
    response_body = {'id': planet.id, 'name': planet.name, 'climate': planet.climate, 'terrain': planet.terrain}
    return jsonify(response_body), 200

@api.route('/users', methods=['GET'])
def get_all_users():
    users = users.query.all()
    response_body = [{'id': u.id, 'username': u.username} for u in users]
    return jsonify(response_body), 200

@api.route('/users/favorites', methods=['GET'])
def get_user_favorites():
    # Simulación de un usuario actual con id = 1
    current_user_id = 1
    favorites = favorites.query.filter_by(user_id=current_user_id).all()
    response_body = []
    for fav in favorites:
        if fav.people_id:
            people = people.query.get(fav.people_id)
            response_body.apiend({'type': 'people', 'id': people.id, 'name': people.name})
        if fav.planet_id:
            planet = planet.query.get(fav.planet_id)
            response_body.apiend({'type': 'planet', 'id': planet.id, 'name': planet.name})
    return jsonify(response_body), 200

@api.route('/favorite/people/<int:people_id>', methods=['POST'])
def add_favorite_people(people_id):
    current_user_id = 1
    favorite = favorite(user_id=current_user_id, people_id=people_id)
    db.session.add(favorite)
    db.session.commit()
    response_body = {'message': 'Favorite people added successfully'}
    return jsonify(response_body), 200

@api.route('/favorite/planet/<int:planet_id>', methods=['POST'])
def add_favorite_planet(planet_id):
    current_user_id = 1
    favorite = favorite(user_id=current_user_id, planet_id=planet_id)
    db.session.add(favorite)
    db.session.commit()
    response_body = {'message': 'Favorite planet added successfully'}
    return jsonify(response_body), 200

@api.route('/favorite/people/<int:people_id>', methods=['DELETE'])
def delete_favorite_people(people_id):
    current_user_id = 1
    favorite = favorite.query.filter_by(user_id=current_user_id, people_id=people_id).first()
    if favorite:
        db.session.delete(favorite)
        db.session.commit()
        response_body = {'message': 'Favorite people deleted successfully'}
        return jsonify(response_body), 200
    return jsonify({'message': 'Favorite not found'}), 404

@api.route('/favorite/planet/<int:planet_id>', methods=['DELETE'])
def delete_favorite_planet(planet_id):
    current_user_id = 1
    favorite = favorite.query.filter_by(user_id=current_user_id, planet_id=planet_id).first()
    if favorite:
        db.session.delete(favorite)
        db.session.commit()
        response_body = {'message': 'Favorite planet deleted successfully'}
        return jsonify(response_body), 200
    return jsonify({'message': 'Favorite not found'}), 404