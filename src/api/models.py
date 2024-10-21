from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Characters(db.Model):
    __tablename__ = "characters"
    uid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)

    def __repr__(self):
        return f'<Characters {self.name}>'

    def serialize(self):
        return {"uid": self.uid,
                "name": self.username}


class CharacterDetails(db.Model):
    __tablename__ = "character_details"
    uid = db.Column(db.Integer, primary_key=True)
    character_id = db.Column(db.Integer, unique=True, nullable=False)
    planet_origin = db.Column(db.String, unique=False, nullable=False)
    name = db.Column(db.String, unique=False, nullable=False)
    gender = db.Column(db.String, unique=False, nullable=False)
    height = db.Column(db.String, unique=False, nullable=False)
    eye_color = db.Column(db.String, unique=False, nullable=False)
    hair_color = db.Column(db.String, unique=False, nullable=False)
    transport = db.Column(db.String, unique=False, nullable=False)

    def __repr__(self):
        return f'<Character {self.name} - {self.planet_origin}>'

    def serialize(self):
        return {"id": self.id,
                "username": self.username,
                "firstname": self.firstname,
                "lastname": self.lastname,
                "email": self.email}


class Planets(db.Model):
    __tablename__ = "planets"
    uid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    

class PlanetDetails(db.Model):
    __tablename__ = "planet_details"
    uid = db.Column(db.Integer, primary_key=True)
    planet_id = db.Column(db.Integer, unique=True, nullable=False)
    gravity = db.Column(db.String, unique=False, nullable=False)
    diameter = db.Column(db.String, unique=False, nullable=False)
    population = db.Column(db.String, unique=False, nullable=False)
    terrain = db.Column(db.String, unique=False, nullable=False)
    created = db.Column(db.String, unique=False, nullable=False)


class Starships(db.Model):
    __tablename__ = "starships"
    uid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)


class StarshipDetails(db.Model):
    __tablename__ = "starship_details"
    uid = db.Column(db.Integer, primary_key=True)
    starship_id = db.Column(db.Integer, unique=True, nullable=False)
    model = db.Column(db.String, unique=False, nullable=False)
    cargo_capacity = db.Column(db.String, unique=False, nullable=False)
    cost = db.Column(db.String, unique=False, nullable=False)
    passengers = db.Column(db.String, unique=False, nullable=False)
