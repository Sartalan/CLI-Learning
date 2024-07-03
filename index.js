#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
    .command("pokemon")
    .version('1.0.0')
    .description('My CLI tool')
    .action(() => {
            fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then(response => response.json())
            .then(res => (
                res.name == 'ditto' ? console.log("es ditto") : console.log("es otro y es: " + res.name))
            )
    });

program
    .command("lol")
    .action(() => {
        console.log('otro comando wtf oulyshiet')
    })

program.parse(process.argv);
