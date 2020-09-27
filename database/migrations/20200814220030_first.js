
exports.up = function(knex) {
	return knex
	 .schema 
	
	.createTable( 'users', function( userTable ) {  
		 userTable.increments();
		 userTable.string( 'gender', 10 ).nullable();
		 userTable.string( 'dob', 20 ).nullable(); 
		 userTable.string( 'pregnant', 20 ).nullable(); 
		 userTable.string( 'breastfeeding', 20 ).nullable(); 
		 userTable.string( 'smoke', 20 ).nullable(); 
		 userTable.text( 'disease' ).nullable(); 
		 userTable.string( 'fracture', 20 ).nullable(); 
		 userTable.string( 'duration', 20 ).nullable(); 
		 userTable.string( 'activity', 20 ).nullable(); 
		 userTable.string( 'improve', 20 ).nullable(); 
		 userTable.string( 'tingling', 20 ).nullable(); 
		 userTable.string( 'swelling', 20 ).nullable(); 
		 userTable.string( 'redburning', 20 ).nullable(); 
		 userTable.string( 'ratepain', 20 ).nullable(); 
		 userTable.string('created_at',  50).notNullable();
		 userTable.string('updated_at',  50).nullable();
		 userTable.enu('status', ['Active', 'Pending', 'Deleted', 'Banned']).defaultTo('Active'); 
	 })
  
	 
 
 };
 
 exports.down = function(knex) {
	  
 };
 