# avoider

De minigame is een klein ontwijk spelletje waar een speler over een blokjes heen springt

Op de startpagina is de minigame te vinden met daarboven twee knoppen een voor naar de game, de ander voor het scorebord.In het scorebord is een zoekveld waarin je ook nog naar een speler kan zoeken.

view 1: game
view 2: scorebord
view 3: zoekresultaten scorebord

Alle data wordt via JSON en een PHP webservice in de database gezet en ook uitgelezen. Om te checken of het ophalen en uitlezen gelukt is kan ik een Promise gebruiken. 

overerving kan ik gebruiken voor de verschillende obstakels en de speler door een base class gameobject te maken.

Player 
Obstacle -> SingleObstacle
Obstacle -> DoubleObstacle
