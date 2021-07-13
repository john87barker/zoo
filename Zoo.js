import ArcticWolf from "./models/a.js";
import Bandicoot from "./models/b.js";
import Caiman from "./models/c.js";
import Dingo from "./models/d.js";
import Emu from "./models/e.js";
import FennecFox from "./models/f.js";
import Gharial from "./models/g.js";
import HornShark from "./models/h.js";
import IndianElephant from "./models/i.js";
import Jerboa from "./models/j.js";
import Krill from "./models/k.js";
import Lobster from "./models/l.js";
import Manatee from "./models/m.js";
import Narwhal from "./models/n.js";
import Octopus from "./models/o.js";
import PeregrineFalcon from "./models/p.js";
import Quetzal from "./models/q.js";
import RedSquirrel from "./models/r.js";
import SaberToothTiger from "./models/s.js";
import Tapir from "./models/t.js";
import Utonagan from "./models/u.js";
import Vulture from "./models/v.js";
import Warthog from "./models/w.js";
import Xerus from "./models/x.js";
import Yak from "./models/y.js";
import Zorse from "./models/z.js";

let zoo = {
  Aquarium: {
    Lobster: new Lobster('Vinny', 'red', 15, 'crestacean', 14, 'na', 'water', false, 1),
    Krill: new Krill('Kenny', 'clear', 1, 'crestacean', .5, 'na', 'water', false, 1)
 },

 BirdCage: {
  Vulture: new Vulture('Valentine', 'yellow', 15, 'bird', 14, 'na', 'sky', true, 12),
  PeregrineFalcon: new PeregrineFalcon('Susan', 'black', 112, 'bird', 14, 'na', 'sky', true, 12),
  Quetzal: new Quetzal('Bob', 'green', 15, 'bird', 14, 'na', 'sky', true, 12),
  Emu: new Emu('Fabio', 'grey', 60, 'bird', 98, 'na', 'sky', true, 12)
},

 River: {
   Caiman: new Caiman('Mikey', 'grey', 2000, 'reptile', 180, 'sharp', 'water', false, 30),
   Gharial: new Gharial('Emily', 'grey', 2000, 'reptile', 180, 'sharp', 'water', false, 30)
},
  Tank: {
   HornShark: new HornShark('Karen', 'grey', 2000, 'reptile', 180, 'sharp', 'water', false, 30),
    Manatee: new Manatee('Kareem', 'grey', 2000, 'reptile', 180, 'sharp', 'water', false, 30),
    Narwhal: new Narwhal('Micky', 'grey', 2000, 'reptile', 180, 'sharp', 'water', false, 30),
  Octopus: new Octopus('Minnie', 'grey', 2000, 'reptile', 180, 'sharp', 'water', false, 30)
},

  smallMammals: {
    Bandicoot: new Bandicoot('Mikey', 'grey', 2000, 'small mammal', 180, 'sharp', 'anywhere', false, 30),
    Dingo: new Dingo('Mikey', 'grey', 2000, 'small mammal', 180, 'sharp', 'anywhere', false, 30),
    FennecFox: new Caiman('Mikey', 'grey', 2000, 'small mammal', 180, 'sharp', 'anywhere', false, 30),
    Jerboa: new Jerboa('Mikey', 'grey', 2000, 'small mammal', 180, 'sharp', 'anywhere', false, 30),
    RedSquirrel: new RedSquirrel('Mikey', 'grey', 2000, 'small mammal', 180, 'sharp', 'anywhere', false, 30),
    Utonagan: new Utonagan('Mikey', 'grey', 2000, 'small mammal', 180, 'sharp', 'anywhere', false, 30),
    Xerus: new Xerus('Mikey', 'grey', 2000, 'small mammal', 180, 'sharp', 'anywhere', false, 30),
  },
 Grassland: {
   IndianElephant: new IndianElephant('Willy', 'grey', 2000, 'Large Mammal', 180, 'flat', 'grassland', false, 30),
   Tapir: new Tapir('Betty', 'grey', 2000, 'Large Mammal', 180, 'flat', 'grassland', false, 30),
   Warthog: new Warthog('Pumba', 'grey', 2000, 'Large Mammal', 180, 'flat', 'grassland', false, 30),
   Yak: new Yak('Yakkity', 'grey', 2000, 'Large Mammal', 180, 'flat', 'grassland', false, 30),
   Zorse: new Zorse('Doug', 'grey', 2000, 'Large Mammal', 180, 'flat', 'grassland', false, 30),
},
 PreditorDen:{
   ArcticWolf: new ArcticWolf('Joey', 'grey', 2000, 'preditor', 180, 'sharp', 'forests', false, 30),
   SaberToothTiger: new SaberToothTiger('Sabine', 'grey', 2000, 'preditor', 180, 'sharp', 'forests', false, 30),
   
}
}