<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class TestsTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		foreach(range(1, 10) as $index)
		{
			Test::create([
				'name' => $faker->word,
				'category_id' => $faker->randomNumber(1, 5)
			]);
		}
	}

}