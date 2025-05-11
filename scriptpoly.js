/**********************
     * QUESTION LIBRARY
     * For demonstration, each category only has a few sample questions.
     * In your full application, you can expand each array to contain up to 150 questions.
     **********************/
const questionLibrary = {
     economicIntervention: [
        { id: "ei1", text: "Government should regulate businesses to protect workers and consumers.", scale: "inverted" },
        { id: "ei2", text: "Public funding for social services is essential to reducing inequality.", scale: "inverted" },
        { id: "ei3", text: "A strong welfare state is necessary for societal well-being.", scale: "inverted" },
        { id: "ei4", text: "Increased government oversight in the financial sector prevents crises.", scale: "inverted" },
        { id: "ei5", text: "Government intervention is required to safeguard environmental sustainability.", scale: "inverted" },
        { id: "ei6", text: "Regulation of monopolies is crucial to ensure fair competition.", scale: "inverted" },
        { id: "ei7", text: "State intervention in healthcare ensures equal access to quality services.", scale: "inverted" },
        { id: "ei8", text: "The government should set minimum wages to combat income disparity.", scale: "inverted" },
        { id: "ei9", text: "Stricter government regulations can prevent exploitative labor practices.", scale: "inverted" },
        { id: "ei10", text: "Public investments in education lead to a more equitable society.", scale: "inverted" },
        { id: "ei11", text: "The government should subsidize renewable energy to reduce dependence on fossil fuels.", scale: "inverted" },
        { id: "ei12", text: "Enhanced government oversight can mitigate corporate malpractices.", scale: "inverted" },
        { id: "ei13", text: "Progressive taxation is essential for addressing wealth inequality.", scale: "inverted" },
        { id: "ei14", text: "Government regulation of financial markets helps stabilize the economy.", scale: "inverted" },
        { id: "ei15", text: "Intervention in housing markets can ensure affordable homeownership for all.", scale: "inverted" },
        { id: "ei16", text: "Public funding of social welfare programs is vital for reducing poverty.", scale: "inverted" },
        { id: "ei17", text: "The state should regulate pharmaceutical prices to protect consumers.", scale: "inverted" },
        { id: "ei18", text: "Government control over utilities is necessary for fair pricing.", scale: "inverted" },
        { id: "ei19", text: "Increased government spending on infrastructure boosts economic fairness.", scale: "inverted" },
        { id: "ei20", text: "Government policies should support small businesses over large corporations.", scale: "inverted" },
        { id: "ei21", text: "A strong government role is needed to prevent economic monopolies.", scale: "inverted" },
        { id: "ei22", text: "State intervention can reduce the negative externalities of industrial activities.", scale: "inverted" },
        { id: "ei23", text: "Public regulation of labor rights is crucial to protecting employees.", scale: "inverted" },
        { id: "ei24", text: "Government oversight is essential to ensure ethical business conduct.", scale: "inverted" },
        { id: "ei25", text: "Intervention in the banking sector prevents usurious practices.", scale: "inverted" },
        { id: "ei26", text: "Government initiatives can foster economic stability during recessions.", scale: "inverted" },
        { id: "ei27", text: "Regulation of trade policies by the government benefits the domestic workforce.", scale: "inverted" },
        { id: "ei28", text: "Public programs help to bridge the digital divide among citizens.", scale: "inverted" },
        { id: "ei29", text: "State intervention is key to creating job opportunities in underdeveloped regions.", scale: "inverted" },
        { id: "ei30", text: "Government-led reforms can address systemic economic inequalities.", scale: "inverted" },
        { id: "ei31", text: "Intervention in technology industries is necessary to preserve consumer privacy.", scale: "inverted" },
        { id: "ei32", text: "Public oversight ensures that corporate mergers do not harm market competition.", scale: "inverted" },
        { id: "ei33", text: "Government regulation is important for maintaining ethical standards in business.", scale: "inverted" },
        { id: "ei34", text: "State involvement in healthcare funding is essential to curb profiteering.", scale: "inverted" },
        { id: "ei35", text: "Increased public control over critical industries leads to broader economic stability.", scale: "inverted" },
        { id: "ei36", text: "Government should implement policies to support worker cooperatives.", scale: "inverted" },
        { id: "ei37", text: "State regulation in the agriculture sector is vital for food security.", scale: "inverted" },
        { id: "ei38", text: "Public intervention in economic crises can help avert widespread hardship.", scale: "inverted" },
        { id: "ei39", text: "Government regulation of environmental standards is critical for public health.", scale: "inverted" },
        { id: "ei40", text: "State-imposed controls on speculative markets can prevent economic bubbles.", scale: "inverted" },
        { id: "ei41", text: "A proactive government role in innovation funding fosters an inclusive economy.", scale: "inverted" },
        { id: "ei42", text: "Public regulation of service industries ensures fair labor practices.", scale: "inverted" },
        { id: "ei43", text: "Government intervention in transport can lower costs for the public.", scale: "inverted" },
        { id: "ei44", text: "State control over natural resources ensures that profits benefit society.", scale: "inverted" },
        { id: "ei45", text: "Regulated public-private partnerships can drive equitable development.", scale: "inverted" },
        { id: "ei46", text: "Government oversight in the telecommunications industry is necessary for consumer protection.", scale: "inverted" },
        { id: "ei47", text: "Public funding for cultural programs enhances societal progress.", scale: "inverted" },
        { id: "ei48", text: "State regulations in the utility sector are important for environmental sustainability.", scale: "inverted" },
        { id: "ei49", text: "Government intervention in consumer markets safeguards vulnerable populations.", scale: "inverted" },
        { id: "ei50", text: "Proactive government policies are essential for long-term economic stability.", scale: "inverted" }
      ],
      
      moderation : [
        { id: "m1", text: "Compromise and dialogue are essential for political stability.", scale: "normal" },
        { id: "m2", text: "Rigid, extremist policies are harmful to society.", scale: "normal" },
        { id: "m3", text: "Pragmatic decision-making is better than strict ideological stances.", scale: "normal" },
        { id: "m4", text: "Policies based solely on ideology often fail to address real-world issues.", scale: "normal" },
        { id: "m5", text: "A balanced approach is preferable to taking extreme positions.", scale: "normal" },
        { id: "m6", text: "Effective governance requires flexibility rather than rigid adherence to doctrine.", scale: "normal" },
        { id: "m7", text: "Bipartisan cooperation is key to producing lasting political solutions.", scale: "normal" },
        { id: "m8", text: "Polarizing rhetoric tends to undermine healthy political discourse.", scale: "normal" },
        { id: "m9", text: "Political compromise is necessary for achieving long-lasting peace.", scale: "normal" },
        { id: "m10", text: "Extreme views rarely lead to sustainable policy outcomes.", scale: "normal" },
        { id: "m11", text: "Conceding on minor issues can be essential to progress.", scale: "normal" },
        { id: "m12", text: "A moderate stance is especially beneficial during times of crisis.", scale: "normal" },
        { id: "m13", text: "Political dialogue should always aim to find common ground.", scale: "normal" },
        { id: "m14", text: "Attacking opposing views with extreme rhetoric rarely results in positive change.", scale: "normal" },
        { id: "m15", text: "Balanced policies can help bridge the gap between ideological extremes.", scale: "normal" },
        { id: "m16", text: "A peaceful society is built on compromise, not on conflict.", scale: "normal" },
        { id: "m17", text: "Firm ideological demands can obstruct the creative problem-solving process.", scale: "normal" },
        { id: "m18", text: "Effective leaders engage in thoughtful deliberation instead of radical action.", scale: "normal" },
        { id: "m19", text: "Centrist policies help prevent political polarization.", scale: "normal" },
        { id: "m20", text: "In political debates, extreme positions tend to alienate potential allies.", scale: "normal" },
        { id: "m21", text: "Political decisions should consider multiple perspectives for fairness.", scale: "normal" },
        { id: "m22", text: "Consensus building is key to democratic governance.", scale: "normal" },
        { id: "m23", text: "Exaggerated political claims undermine citizen trust.", scale: "normal" },
        { id: "m24", text: "Moderate policies are more likely to result in stable governance.", scale: "normal" },
        { id: "m25", text: "Balanced political rhetoric supports a more harmonious society.", scale: "normal" },
        { id: "m26", text: "Extreme political stances tend to escalate conflicts unnecessarily.", scale: "normal" },
        { id: "m27", text: "Diplomacy should always be prioritized over rigid ideological positions.", scale: "normal" },
        { id: "m28", text: "Open-minded discussion can generate innovative policy solutions.", scale: "normal" },
        { id: "m29", text: "Flexibility in political thinking often produces better outcomes than dogmatism.", scale: "normal" },
        { id: "m30", text: "Listening to opposing views is essential for meaningful compromise.", scale: "normal" },
        { id: "m31", text: "Integrating diverse opinions improves the quality of political debate.", scale: "normal" },
        { id: "m32", text: "Moderation is a strength in leadership, not a sign of weakness.", scale: "normal" },
        { id: "m33", text: "Political decisions guided by radical ideologies risk societal instability.", scale: "normal" },
        { id: "m34", text: "Striving for the middle ground is often more constructive than defending extremes.", scale: "normal" },
        { id: "m35", text: "Constructive dialogue requires compromise on contentious issues.", scale: "normal" },
        { id: "m36", text: "Excessive partisanship often hinders meaningful compromise.", scale: "normal" },
        { id: "m37", text: "Short-sighted extreme measures tend to falter over time.", scale: "normal" },
        { id: "m38", text: "Nuanced policymaking works better than binary ideological choices.", scale: "normal" },
        { id: "m39", text: "A moderate approach encourages cross-party collaboration.", scale: "normal" },
        { id: "m40", text: "Extreme stances simplify complex issues to dangerous levels.", scale: "normal" },
        { id: "m41", text: "Policymakers should focus on realistic solutions rather than utopian ideals.", scale: "normal" },
        { id: "m42", text: "Building bridges between differing views leads to more resilient policies.", scale: "normal" },
        { id: "m43", text: "Extremist rhetoric often divides society rather than uniting it.", scale: "normal" },
        { id: "m44", text: "A centrist approach adapts better to changing circumstances.", scale: "normal" },
        { id: "m45", text: "Political moderation tends to produce balanced policy outcomes.", scale: "normal" },
        { id: "m46", text: "Leaving room for multiple approaches in government fosters innovation.", scale: "normal" },
        { id: "m47", text: "Harsh rhetoric and ideological rigidity are counterproductive for progress.", scale: "normal" },
        { id: "m48", text: "Decision-making that values diverse perspectives minimizes extremism.", scale: "normal" },
        { id: "m49", text: "Adopting a middle-ground stance helps prevent political gridlock.", scale: "normal" },
        { id: "m50", text: "Reserving judgment and being open to dialogue are hallmarks of a moderate mindset.", scale: "normal" }
      ],      
      economicSystem:[
        { id: "es1", text: "I support higher taxes on the wealthy.", scale: "inverted" },
        { id: "es2", text: "A free market economy fosters innovation and growth.", scale: "normal" },
        { id: "es3", text: "Wealth redistribution is key to ensuring social justice.", scale: "inverted" },
        { id: "es4", text: "Government deregulation leads to economic prosperity.", scale: "normal" },
        { id: "es5", text: "The government should increase the minimum wage to reduce inequality.", scale: "inverted" },
        { id: "es6", text: "Private enterprise should be the primary driver of economic development.", scale: "normal" },
        { id: "es7", text: "State intervention is necessary to provide essential public services.", scale: "inverted" },
        { id: "es8", text: "Lower corporate taxes stimulate job creation and investment.", scale: "normal" },
        { id: "es9", text: "A progressive tax system is vital for a fair society.", scale: "inverted" },
        { id: "es10", text: "Market competition rewards efficiency and reduces waste.", scale: "normal" },
        { id: "es11", text: "Government-funded healthcare ensures that everyone has access to medical care.", scale: "inverted" },
        { id: "es12", text: "Reducing excessive regulation can lead to more consumer choices.", scale: "normal" },
        { id: "es13", text: "Public investment in education is a priority for national growth.", scale: "inverted" },
        { id: "es14", text: "Free markets are self-regulating and efficient.", scale: "normal" },
        { id: "es15", text: "The state should play a major role in redistributing income.", scale: "inverted" },
        { id: "es16", text: "Cutting bureaucracy boosts economic dynamism.", scale: "normal" },
        { id: "es17", text: "Social safety nets are crucial for protecting vulnerable citizens.", scale: "inverted" },
        { id: "es18", text: "Corporate freedom drives innovation and new business creation.", scale: "normal" },
        { id: "es19", text: "Government subsidies help level the playing field for disadvantaged groups.", scale: "inverted" },
        { id: "es20", text: "Entrepreneurship thrives best in an unregulated market.", scale: "normal" },
        { id: "es21", text: "A high-tax system is essential for funding public goods and services.", scale: "inverted" },
        { id: "es22", text: "Tax incentives are a powerful way to encourage private investments.", scale: "normal" },
        { id: "es23", text: "State-owned enterprises can ensure equitable access to essential services.", scale: "inverted" },
        { id: "es24", text: "Privatization leads to more efficient resource allocation.", scale: "normal" },
        { id: "es25", text: "Government intervention can prevent exploitative market practices.", scale: "inverted" },
        { id: "es26", text: "Reducing state oversight allows businesses more freedom to innovate.", scale: "normal" },
        { id: "es27", text: "Social welfare programs are necessary to bridge economic disparities.", scale: "inverted" },
        { id: "es28", text: "Lower taxes increase disposable income and fuel consumer spending.", scale: "normal" },
        { id: "es29", text: "Investment in public infrastructure should be financed by progressive taxation.", scale: "inverted" },
        { id: "es30", text: "Competitive markets naturally drive down costs for consumers.", scale: "normal" },
        { id: "es31", text: "The government should enforce regulations to break up monopolies.", scale: "inverted" },
        { id: "es32", text: "Deregulation boosts the entrepreneurial spirit and market expansion.", scale: "normal" },
        { id: "es33", text: "Supporting labor unions is crucial to protecting worker rights.", scale: "inverted" },
        { id: "es34", text: "Free market principles encourage efficient use of resources.", scale: "normal" },
        { id: "es35", text: "Government efforts to reduce poverty require higher taxes on the affluent.", scale: "inverted" },
        { id: "es36", text: "Economic liberalization creates opportunities for growth.", scale: "normal" },
        { id: "es37", text: "Public accountability in economic policies is essential for fairness.", scale: "inverted" },
        { id: "es38", text: "Minimal state intervention is key to maintaining global competitiveness.", scale: "normal" },
        { id: "es39", text: "Redistributive policies contribute to a more cohesive society.", scale: "inverted" },
        { id: "es40", text: "Reducing corporate tax rates spurs economic recovery.", scale: "normal" },
        { id: "es41", text: "Government regulation is necessary to curb significant income inequality.", scale: "inverted" },
        { id: "es42", text: "Free market reforms are vital for long-term economic expansion.", scale: "normal" },
        { id: "es43", text: "A robust social safety net is a cornerstone of a just economy.", scale: "inverted" },
        { id: "es44", text: "Reducing government control encourages business innovation.", scale: "normal" },
        { id: "es45", text: "Investing in public services is a moral imperative for governments.", scale: "inverted" },
        { id: "es46", text: "Economic freedom is amplified by lower taxation.", scale: "normal" },
        { id: "es47", text: "Policies that reduce the wealth gap benefit societal unity.", scale: "inverted" },
        { id: "es48", text: "Free market competition drives prices down and improves quality.", scale: "normal" },
        { id: "es49", text: "Government intervention is the most effective tool to tackle economic disparity.", scale: "inverted" },
        { id: "es50", text: "Lowering taxes on earnings boosts individual initiative and economic activity.", scale: "normal" }
      ],      
      socialProgress : [
        { id: "sp1", text: "I support marriage equality and LGBTQ+ rights.", scale: "normal" },
        { id: "sp2", text: "Traditional cultural values are important for societal stability.", scale: "inverted" },
        { id: "sp3", text: "Inclusivity and diversity must be a priority in public policies.", scale: "normal" },
        { id: "sp4", text: "Equal pay for equal work regardless of gender is essential.", scale: "normal" },
        { id: "sp5", text: "Society benefits when everyone is treated equally regardless of race or ethnicity.", scale: "normal" },
        { id: "sp6", text: "Policies that promote social integration help build a cohesive community.", scale: "normal" },
        { id: "sp7", text: "Government should actively combat discrimination in all its forms.", scale: "normal" },
        { id: "sp8", text: "Preserving long-established cultural norms strengthens society.", scale: "inverted" },
        { id: "sp9", text: "Modern social movements are vital for achieving human rights.", scale: "normal" },
        { id: "sp10", text: "Respect for traditional family structures is key to social order.", scale: "inverted" },
        { id: "sp11", text: "Education should include comprehensive sex education and gender studies.", scale: "normal" },
        { id: "sp12", text: "Maintaining conventional gender roles is important for a stable society.", scale: "inverted" },
        { id: "sp13", text: "Laws should protect the rights of ethnic minorities and immigrants.", scale: "normal" },
        { id: "sp14", text: "It is important to preserve the cultural heritage of a nation, even if it means limiting rapid social changes.", scale: "inverted" },
        { id: "sp15", text: "Affirmative action is necessary to correct historical inequalities.", scale: "normal" },
        { id: "sp16", text: "Social progress is hindered when communities cling to outdated stereotypes.", scale: "normal" },
        { id: "sp17", text: "Diversity in the workplace leads to greater innovation and better outcomes.", scale: "normal" },
        { id: "sp18", text: "Political correctness is undermining free speech.", scale: "inverted" },
        { id: "sp19", text: "Public institutions should actively promote multiculturalism and social inclusion.", scale: "normal" },
        { id: "sp20", text: "There is value in preserving the traditional roles that have been a part of our history.", scale: "inverted" },
        { id: "sp21", text: "Gender-neutral policies enhance fairness in society.", scale: "normal" },
        { id: "sp22", text: "A focus on social justice is critical for building a progressive society.", scale: "normal" },
        { id: "sp23", text: "The government should ensure that all citizens have access to quality education regardless of their background.", scale: "normal" },
        { id: "sp24", text: "Policies aimed at reducing social disparities improve overall community well-being.", scale: "normal" },
        { id: "sp25", text: "Embracing change in social norms can lead to stronger, more adaptable communities.", scale: "normal" },
        { id: "sp26", text: "Respect for tradition should be prioritized over the disruptive impact of modern social experiments.", scale: "inverted" },
        { id: "sp27", text: "Society benefits from open-minded attitudes towards different cultures and lifestyles.", scale: "normal" },
        { id: "sp28", text: "Efforts to preserve ancient customs and rituals are essential for maintaining cultural identity.", scale: "inverted" },
        { id: "sp29", text: "Enhancing civil rights leads to a more dynamic and innovative society.", scale: "normal" },
        { id: "sp30", text: "Statutes that enforce rigid gender roles limit individual freedom.", scale: "normal" },
        { id: "sp31", text: "Legal protections for marginalized communities are fundamental for social progress.", scale: "normal" },
        { id: "sp32", text: "Excessive emphasis on group identity in social policies can hinder personal initiative.", scale: "inverted" },
        { id: "sp33", text: "Social reforms that expand civil rights have positively transformed our society.", scale: "normal" },
        { id: "sp34", text: "Conservative values help maintain social order and continuity.", scale: "inverted" },
        { id: "sp35", text: "Openness to new social ideas fosters creativity and community growth.", scale: "normal" },
        { id: "sp36", text: "Rejecting traditional norms altogether can lead to a loss of social cohesion.", scale: "inverted" },
        { id: "sp37", text: "Protecting individual freedoms is central to achieving true social progress.", scale: "normal" },
        { id: "sp38", text: "A commitment to social inclusivity enriches cultural diversity.", scale: "normal" },
        { id: "sp39", text: "Modern social policies should embrace change and challenge outdated norms.", scale: "normal" },
        { id: "sp40", text: "Holding fast to traditional values ensures stability in an ever-changing world.", scale: "inverted" },
        { id: "sp41", text: "Encouraging diversity in leadership results in more innovative decision-making.", scale: "normal" },
        { id: "sp42", text: "Rigid adherence to conventional social roles stifles personal development.", scale: "normal" },
        { id: "sp43", text: "Policies that reinforce outdated gender stereotypes impede social advancement.", scale: "normal" },
        { id: "sp44", text: "Respecting heritage and tradition is essential for a nation's identity.", scale: "inverted" },
        { id: "sp45", text: "Social movements advocating for equality and justice pave the way for transformative change.", scale: "normal" },
        { id: "sp46", text: "Overly progressive changes can sometimes destabilize established community practices.", scale: "inverted" },
        { id: "sp47", text: "Adapting social policies to reflect modern values is crucial for progress.", scale: "normal" },
        { id: "sp48", text: "Society should resist abandoning time-tested cultural practices without careful consideration.", scale: "inverted" },
        { id: "sp49", text: "A pluralistic society thrives on embracing diverse lifestyles and beliefs.", scale: "normal" },
        { id: "sp50", text: "Progressive social values promote a more open and dynamic public sphere.", scale: "normal" }
      ],      
      religion :[
        { id: "r1", text: "Religion should influence government policy.", scale: "normal" },
        { id: "r2", text: "Church and state must remain strictly separate.", scale: "inverted" },
        { id: "r3", text: "Religious traditions provide an essential moral framework.", scale: "normal" },
        { id: "r4", text: "The integration of religious values into law strengthens our community.", scale: "normal" },
        { id: "r5", text: "Secularism leads to more impartial government actions.", scale: "inverted" },
        { id: "r6", text: "Faith-based initiatives can improve social welfare.", scale: "normal" },
        { id: "r7", text: "Religious institutions should not influence public education.", scale: "inverted" },
        { id: "r8", text: "Religious charities play a crucial role in supporting the needy.", scale: "normal" },
        { id: "r9", text: "State policy should be crafted independently of religious doctrine.", scale: "inverted" },
        { id: "r10", text: "Moral guidance from religious texts is important for ethical governance.", scale: "normal" },
        { id: "r11", text: "Government should remain neutral in matters of faith.", scale: "inverted" },
        { id: "r12", text: "Faith communities contribute positively to national identity.", scale: "normal" },
        { id: "r13", text: "A secular government best protects individual freedom of belief.", scale: "inverted" },
        { id: "r14", text: "Religious rituals and celebrations enrich our cultural fabric.", scale: "normal" },
        { id: "r15", text: "Separation of church and state is essential for a modern democracy.", scale: "inverted" },
        { id: "r16", text: "Public policy should incorporate moral values derived from religious teachings.", scale: "normal" },
        { id: "r17", text: "Religion can be a source of division when mixed with politics.", scale: "inverted" },
        { id: "r18", text: "Religious leaders have valuable insights to offer in political matters.", scale: "normal" },
        { id: "r19", text: "A strict separation of religious institutions from government is necessary to protect all citizens.", scale: "inverted" },
        { id: "r20", text: "Faith and spirituality are vital to inspiring ethical public policy.", scale: "normal" },
        { id: "r21", text: "Government decisions should not be based on religious dogma.", scale: "inverted" },
        { id: "r22", text: "Religious values enrich the moral fabric of society.", scale: "normal" },
        { id: "r23", text: "Policy-making free from religious influence is better suited for diverse societies.", scale: "inverted" },
        { id: "r24", text: "Religious guidance can be beneficial in shaping just laws.", scale: "normal" },
        { id: "r25", text: "Neutral public policies are best achieved when religion is kept out of politics.", scale: "inverted" },
        { id: "r26", text: "Religious ethics provide a solid foundation for public morality.", scale: "normal" },
        { id: "r27", text: "A secular system ensures that no single faith dominates society.", scale: "inverted" },
        { id: "r28", text: "Religious teachings can inspire communities to act compassionately.", scale: "normal" },
        { id: "r29", text: "Public institutions should operate without religious considerations.", scale: "inverted" },
        { id: "r30", text: "Faith-based values can guide effective social policy.", scale: "normal" },
        { id: "r31", text: "Government neutrality in religious matters promotes equality.", scale: "inverted" },
        { id: "r32", text: "Religious belief is an important influence in shaping character and policy.", scale: "normal" },
        { id: "r33", text: "A society managed without religious interference is more progressive.", scale: "inverted" },
        { id: "r34", text: "The moral compass provided by religion is crucial for civic life.", scale: "normal" },
        { id: "r35", text: "Secular governance is key to avoiding religious favoritism.", scale: "inverted" },
        { id: "r36", text: "Religion offers indispensable guidance in matters of ethics.", scale: "normal" },
        { id: "r37", text: "Maintaining a clear boundary between religion and state avoids bias.", scale: "inverted" },
        { id: "r38", text: "The influence of faith in politics can lead to more compassionate policies.", scale: "normal" },
        { id: "r39", text: "Government should avoid endorsing any religion to ensure fairness.", scale: "inverted" },
        { id: "r40", text: "Religious communities are an integral part of the nation’s moral structure.", scale: "normal" },
        { id: "r41", text: "Public policy should be devoid of any religious affiliation.", scale: "inverted" },
        { id: "r42", text: "Religion provides a time-tested ethical framework for addressing social issues.", scale: "normal" },
        { id: "r43", text: "A separation between church and state protects the rights of all faiths.", scale: "inverted" },
        { id: "r44", text: "Spiritual values help nurture a humane and caring society.", scale: "normal" },
        { id: "r45", text: "A secular approach to governance ensures impartial public policies.", scale: "inverted" },
        { id: "r46", text: "Incorporating religious perspectives in ethics can lead to more compassionate laws.", scale: "normal" },
        { id: "r47", text: "Maintaining church-state separation prevents the abuse of power.", scale: "inverted" },
        { id: "r48", text: "Religious inspiration plays a vital role in community and national identity.", scale: "normal" },
        { id: "r49", text: "The principles of secularism are essential to protect minority rights.", scale: "inverted" },
        { id: "r50", text: "An open expression of faith enriches public debate and policy.", scale: "normal" }
      ]      
  };

  /**********************
   * HELPER FUNCTIONS
   **********************/
  // Shuffle an array using the Fisher–Yates algorithm
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Generate the dynamic quiz form
  function generateQuiz() {
    const totalQuestions = parseInt(document.getElementById("numQuestions").value, 10);
    const categories = Object.keys(questionLibrary);
    const numCategories = categories.length;
    const baseCount = Math.floor(totalQuestions / numCategories);
    let remainder = totalQuestions % numCategories;

    let selectedQuestions = [];
    
    // For each category, select a base number plus one extra if needed
    categories.forEach(category => {
      // Clone and shuffle the questions for the current category
      const questionsCopy = shuffle([...questionLibrary[category]]);
      let selectCount = baseCount;
      if (remainder > 0) {
        selectCount += 1;
        remainder--;
      }
      // Select the first selectCount questions
      const questionsSelected = questionsCopy.slice(0, selectCount).map(q => ({...q, category}));
      selectedQuestions = selectedQuestions.concat(questionsSelected);
    });
    
    // Shuffle overall to mix questions from different categories
    selectedQuestions = shuffle(selectedQuestions);
    
    // Build the HTML for the quiz form
    const quizForm = document.getElementById("quizForm");
    quizForm.innerHTML = ""; // Clear any existing questions
    
    selectedQuestions.forEach((q, index) => {
      // Create a container div for each question
      const qDiv = document.createElement("div");
      qDiv.className = "question";
      qDiv.innerHTML = `<h3>Q${index + 1}. ${q.text}</h3>`;
      
      let optionsHTML = "";
      // We'll use Option 2 (endorsement language) as an example.
      // For a "normal" scale, the values map as is.
      if (q.scale === "normal") {
        optionsHTML += `<label><input type="radio" name="${q.id}" value="2" required> Completely Endorse</label>`;
        optionsHTML += `<label><input type="radio" name="${q.id}" value="1"> Largely Endorse</label>`;
        optionsHTML += `<label><input type="radio" name="${q.id}" value="0"> Neither Endorse nor Reject</label>`;
        optionsHTML += `<label><input type="radio" name="${q.id}" value="-1"> Largely Reject</label>`;
        optionsHTML += `<label><input type="radio" name="${q.id}" value="-2"> Completely Reject</label>`;
      } else if (q.scale === "inverted") {
        // For inverted scale, reverse the meaning of the responses.
        optionsHTML += `<label><input type="radio" name="${q.id}" value="-2" required> Completely Endorse</label>`;
        optionsHTML += `<label><input type="radio" name="${q.id}" value="-1"> Largely Endorse</label>`;
        optionsHTML += `<label><input type="radio" name="${q.id}" value="0"> Neither Endorse nor Reject</label>`;
        optionsHTML += `<label><input type="radio" name="${q.id}" value="1"> Largely Reject</label>`;
        optionsHTML += `<label><input type="radio" name="${q.id}" value="2"> Completely Reject</label>`;
      }
      qDiv.innerHTML += optionsHTML;
      quizForm.appendChild(qDiv);
    });
    
    // Show the Submit button once the quiz is generated
    document.getElementById("submitQuiz").style.display = "block";
  }

  document.getElementById("generateQuiz").addEventListener("click", generateQuiz);

  /**********************
   * PROCESSING THE QUIZ
   * For demonstration, we’ll simply compute an average score per category.
   **********************/
  document.getElementById("submitQuiz").addEventListener("click", function(e) {
    e.preventDefault();
    const formData = new FormData(document.getElementById("quizForm"));
    
    // Create an object to store answers by category
    const results = {
        economicIntervention: [],
        moderation: [],
        economicSystem: [],
        socialProgress: [],
        religion: []
      };

      // Gather responses.
      document.querySelectorAll("#quizForm .question").forEach(div => {
        const input = div.querySelector("input[type='radio']:checked");
        if (input) {
          const qid = input.name;
          const response = parseInt(formData.get(qid), 10);
          for (let category in questionLibrary) {
            if (questionLibrary[category].some(q => q.id === qid)) {
              results[category].push(response);
              break;
            }
          }
        }
      });
      
      // Compute average scores per category and prepare labels/data arrays.
      let outputHTML = "<h2>Assessment Results:</h2>";
      const labels = [];
      const averages = [];
      for (let category in results) {
        if (results[category].length > 0) {
          const sum = results[category].reduce((total, val) => total + val, 0);
          const avg = parseFloat((sum / results[category].length).toFixed(2));
          outputHTML += `<p><strong>${category}:</strong> Average Score = ${avg}</p>`;
          labels.push(category);
          averages.push(avg);
        }
      }
      document.getElementById("result").innerHTML = outputHTML;
      
      // Draw the radar (pentagon) chart.
      const ctx = document.getElementById("resultChart").getContext("2d");
      
      // If a previous chart exists, destroy it.
      if (window.myChart) {
        window.myChart.destroy();
      }
      
      window.myChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Average Scores',
            data: averages,
            backgroundColor: 'rgba(82, 130, 255, 0.3)',
            borderColor: 'rgba(82, 130, 255, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(82, 130, 255, 1)'
          }]
        },
        options: {
          scales: {
            r: {
              beginAtZero: true,
              suggestedMin: -2,
              suggestedMax: 2,
              ticks: {
                stepSize: 1
              },
              pointLabels: {
                font: {
                  size: 14
                }
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Quiz Assessment Radar Chart'
            }
          }
        }
      });
    });