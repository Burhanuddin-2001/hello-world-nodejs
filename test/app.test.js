const request = require('supertest');
const express = require('express');

const app = require('../index.js');  // Path to the nodejs app

describe('GET /', () => {
    it('should return Hello, World!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello, World!');
    });
});

describe('POST /add', () => {
    it('should return the sum of two numbers', async () => {
        const res = await request(app)
            .post('/add')
            .send({ a: 1, b: 2 });
        expect(res.statusCode).toEqual(200);
        expect(res.body.result).toBe(3);
    });

    it('should return an error if inputs are not numbers', async () => {
        const res = await request(app)
            .post('/add')
            .send({ a: 'one', b: 'two' });
        expect(res.statusCode).toEqual(400);
        expect(res.body.error).toBe('Both a and b should be numbers');
    });
});

describe('POST /subtract', () => {
    it('should return the difference of two numbers', async () => {
        const res = await request(app)
            .post('/subtract')
            .send({ a: 5, b: 3 });
        expect(res.statusCode).toEqual(200);
        expect(res.body.result).toBe(2);
    });

    it('should return an error if inputs are not numbers', async () => {
        const res = await request(app)
            .post('/subtract')
            .send({ a: 'five', b: 'three' });
        expect(res.statusCode).toEqual(400);
        expect(res.body.error).toBe('Both a and b should be numbers');
    });
});
