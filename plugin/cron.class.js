'use strict';

const cron = require('node-cron');
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

class Task {
    databaseClass
    providerClass
    args = { delay: 0 }
    constructor(_database, _provider, _args) {
        this.databaseClass = _database
        this.providerClass = _provider
        this.args = { ...this.args, ..._args };
    }

    msg = async() => {
        for (const number of this.args.numbers){
            // Generar un número aleatorio entre 0 (inclusive) y 1 (exclusivo)
            const random = Math.random();

            // Escalar y desplazar el número para obtener un valor entre 30 y 60
            // const seconds = Math.floor(random * 31) + 30;

            // Escalar y desplazar el número para obtener un valor entre 10 y 60
            // const seconds = Math.floor(random * 51) + 10;

            // Escalar y desplazar el número para obtener un valor entre 10 y 30
            const seconds = Math.floor(random * 21) + 10;
            const milisegundos = seconds * 1000
            await this.providerClass.sendMessage(`${number}@s.whatsapp.net`, this.args.body, {})
            const vals = {
                from: number,
                task: this.args.name,
                body: this.args.body
            }
            //await this.databaseClass.saveTask(vals);
            await delay(milisegundos) // Esperar
        }
    }

    scheduleTask = async () => {
        cron.schedule(this.args.schedule, async () => {
            await this.msg()
        });
    }
}


class TaskManager {
    databaseClass
    providerClass
    args = { delay: 0 }
    constructor(_database, _provider, _args){
        this.databaseClass = _database
        this.providerClass = _provider
        this.args = { ...this.args, ..._args };
        this.tasks = []
        this.configTask()
    }

    addTask = async(_task) => {
        this.tasks.push(_task)
    }

    scheduleTask = async() => {
        for (const ta of this.tasks){
            await ta.scheduleTask()
        }
    }

    configTask = async() => {
        for (const ta of this.args.tasks){
            await this.addTask(new Task(this.databaseClass, this.providerClass, ta))
        }
        await this.scheduleTask()
    }
}

/**
 * Crear instancia de clase TaskManager
 * @param {*} args
 * @returns
 */

const CronBot = ({ database, provider }, args = {}) => {
    new TaskManager(database, provider, args);
}

module.exports = { CronBot };