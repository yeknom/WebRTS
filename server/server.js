#!/usr/bin/env node
var Engine = require("../engine/serverEngine");
var Sheep = require("../game/sheep.js");
var Player = require("../game/player.js");

var engine = new Engine.ServerEngine();

function CoreGame () {
// Create trees
    for (var i = 0; i < 500; i++) {
        engine.objectManager.add_object(new Engine.GameObject(engine, "tree", $V([
            Math.floor(Math.random() * 2800 + 100),
            Math.floor(Math.random() * 2800 + 100),
            1
        ])));
    }

// Create Sheep
    for (var i = 0; i <= 100; i++) {
        engine.objectManager.add_object(new Sheep.Sheep(engine, $V([Math.random() * 2800 + 100, Math.random() * 2800 + 100, 1])));
    }

    engine.objectManager.add_object(new Engine.GameObject(engine, "house", $V([500, 500, 1])));

    for (var x = 0; x < 3000; x += 50) {
        for (var y = 0; y < 3000; y += 50) {
            if (Math.random() > 0.3) {
                engine.objectManager.add_object(new Engine.GameObject(engine, "grass", $V([x, y, 0])));
            } else {
                engine.objectManager.add_object(new Engine.GameObject(engine, "dirt", $V([x, y, 0])));
            }
        }

    }
}

engine.registerScene("core",CoreGame);
engine.switchScene("core");
engine.start();