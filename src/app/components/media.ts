// Shared Unsplash imagery for the Lumen release site.
const u = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const shots = {
  cityNight: u("1514439827219", 1000),
  neonSign: u("1542902093-d55926049754", 1000),
  streetLamps: u("1586165877141-3dbcfc059283", 1000),
  aerialCity: u("1577450775949-58ec8d02cad9", 1000),
  carsRoad: u("1606152536277-5aa1fd33e150", 1000),
  peopleStreet: u("1599060052009-24d6d0b0161c", 1200),
  portraitRed: u("1629880603571-8239f469a695", 1000),
  portraitBlack: u("1561087548-131cd5d70dfe", 1000),
};
