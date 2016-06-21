var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var expect = chai.expect;
var models = require('../models');

var Page = models.Page;
var User = models.User;



describe('Models', function(){

    describe('pages', function(){
        var createdPage;
        beforeEach(function(done){
            Page.create({
                    title: 'dinosaurs are cool',
                    content: 'hi there!!!'
            }).then(function(page){
                createdPage = page;
                done();
            });
        });

        afterEach(function (done){
            Page.destroy({
                where: {
                    id: createdPage.id
                }
            }).then(function(){
                done();
            });
        });

        it('urlTitle should be proper', function(){
            expect(createdPage.urlTitle).to.equal('dinosaurs_are_cool');

        });

        it('inserts correctly', function(done){

            Page.findOne({
                where:{
                    id: createdPage.id
                }
            }).then(function(page){
               expect(page).to.not.equal(undefined);
               done();
            });
        });

        it('virtual field route displays wiki in front', function(){
           expect(createdPage.route).to.equal('/wiki/dinosaurs_are_cool');
        });

  });


    describe('users', function(){
        var createdUser;
        beforeEach(function(done){
            User.create({
                    title: 'dinosaurs are cool',
                    content: 'hi there!!!'
            }).then(function(user){
                createdUser = user;
                done();
            });
        });

        afterEach(function (done){
            User.destroy({
                where: {
                    id: createdUser.id
                }
            }).then(function(){
                done();
            });
        });



    });
});
